const { exec } = require("child_process");
const fs = require("fs");

const OWNER = "Sanz922";
const REPO = "Furina";

const BRANCH = "main"; // ganti kalau pakai branch lain
const REPO_URL = `https://github.com/${OWNER}/${REPO}.git`;

const dbPath = "../database";
const backupPath = "../database_backup";

// Backup database
function backupDatabase() {
    if (fs.existsSync(dbPath)) {
        if (fs.existsSync(backupPath))
            fs.rmSync(backupPath, { recursive: true, force: true });

        fs.cpSync(dbPath, backupPath, { recursive: true });
    }
}

// Restore database
function restoreDatabase() {
    if (fs.existsSync(backupPath)) {
        fs.rmSync(dbPath, { recursive: true, force: true });
        fs.cpSync(backupPath, dbPath, { recursive: true });
        fs.rmSync(backupPath, { recursive: true, force: true });
    }
}

// Pastikan remote sesuai repo yang ditentukan
function setRemote() {
    return new Promise((resolve) => {
        exec(`git remote remove origin`, () => {
            exec(`git remote add origin ${REPO_URL}`, () => {
                resolve();
            });
        });
    });
}

// Cek update dari GitHub langsung
function checkUpdate() {
    return new Promise(async (resolve) => {
        await setRemote();
        exec(`git fetch origin ${BRANCH} && git status`, (err, stdout) => {
            if (err) return resolve(false);

            if (stdout.includes("behind")) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

// Jalankan update
function startUpdate(sock, ownerNumber) {
    backupDatabase();

    exec(`git pull origin ${BRANCH}`, (err, stdout) => {
        if (err) {
            console.log("Update gagal:", err.message);
            return;
        }

        restoreDatabase();

        if (sock && ownerNumber) {
            sock.sendMessage(ownerNumber, {
                text: `✅ Update berhasil dari repo ${OWNER}/${REPO}\nBot akan restart...`
            });
        }

        process.exit();
    });
}

module.exports = { checkUpdate, startUpdate };