<div align="center">

<a href="https://github.com/TheSamurayJack/web-canar">
  <img width="200px" src="https://github.com/TheSamurayJack/web-canar/blob/main/public/logo.png?raw=true" alt="Logo" width="800" />
</a>

# Colegio Provincia del Cañar - Web No Oficial

La Unidad Educativa Fiscal Provincia del Cañar ofrece educación de calidad, enfocada en el desarrollo integral de los estudiantes.

</div>

</details>

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- NVM (recomendado para asegurar versión de Node) ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # o
  nvm use <version>
  ```

  > Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

- PNPM (es nuestra recomendación por su eficiencia y rapidez)

  ```sh
  npm install -g pnpm
  ```

- o NPM

  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Clona el repositorio

   ```sh
   git clone https://github.com/TheSamurayJack/web-canar.git
   ```

2. Instala los paquetes de NPM

   ```sh
   pnpm install
   ```

3. Ejecuta el proyecto
   - Base de datos remota (necesario linkear con proyecto de Astro Studio)
   ```sh
   pnpm run dev
   ```
   - Base de datos local
   ```sh
   pnpm run start
   ```
