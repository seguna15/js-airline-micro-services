"use strict";

import { readdirSync, promises as fsPromises } from "fs";
import path, { join } from "path";
import { fileURLToPath } from "url";
import Sequelize, { DataTypes } from "sequelize";
import { env as _env } from "process";

// Get current directory path (ES modules alternative to __dirname)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basename = path.basename(fileURLToPath(import.meta.url));

// Load config dynamically
const env = process.env.NODE_ENV || "development";
const configPath = path.join(__dirname, "../config/config.json");
const config = JSON.parse(await fsPromises.readFile(configPath, "utf8"))[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(_env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Dynamically import and initialize all models
const modelFiles = readdirSync(__dirname).filter((file) => {
  return (
    file.indexOf(".") !== 0 &&
    file !== basename &&
    file.slice(-3) === ".js" &&
    file.indexOf(".test.js") === -1
  );
});

await Promise.all(
  modelFiles.map(async (file) => {
    const model = (await import(join(__dirname, file))).default(
      sequelize,
      DataTypes
    );
    db[model.name] = model;
  })
);

// Set up model associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
