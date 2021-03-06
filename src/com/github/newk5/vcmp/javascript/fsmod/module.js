"use strict";
module.exports = {
    readFile: function (filePath, callback) {
        return FileSystemWrapper.readFile(filePath,callback);
    },
    appendToFile: function (filePath, textToAppend, callback) {
        return FileSystemWrapper.appendToFile(filePath, textToAppend,callback);
    },
    deleteFolder: function (filePath, callback) {
        return FileSystemWrapper.deleteFolder(filePath,callback);
    }
}