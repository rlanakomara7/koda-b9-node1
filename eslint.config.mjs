import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    rules: {
      // Wajib menggunakan titik koma (;)
      semi: ["error", "always"],

      // Wajib menggunakan petik dua ("")
      quotes: ["error", "double"],

      // Indentasi 2 spasi
      indent: ["error", 2],

      // Wajib menggunakan === atau !==
      eqeqeq: "error",

      // Tidak boleh ada variabel yang tidak digunakan
      "no-unused-vars": "error",
    },
  },
]);
