// Envuelve src/rutina.html (la misma página del Artifact) en un documento completo para la app.
import { readFileSync, writeFileSync } from "node:fs";
const page = readFileSync("src/rutina.html", "utf8");
const head = '<!doctype html><html lang="es"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
  '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}' +
  'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style></head><body>';
writeFileSync("www/index.html", head + page + "</body></html>");
console.log("www/index.html listo");
