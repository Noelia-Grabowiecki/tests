Automation
==========

Desde aquí podrá implementar las herramientas necesarias en su local y comenzar a automatizar distintos proyectos, desde pruebas unitarias a pruebas end-to-end.

Comenzando
----------
Estas instrucciones te permitirán obtener una copia del proyecto en tu máquina local para propósitos de desarrollo y pruebas.

Prerequisitos 
-------------


**Java & JRE/JDK últimas versiones estables: Instalación en Ubuntu 18.04**

1. En la terminal, ejecutar:

```

$ [sudo] apt update

```

2. Verifica que la versión de Java esté instalada:

```

$ java -version

```

3. Si arroja la versión de JAVA, continúa con el paso 7. De lo contrario, el output será algo como:

```

Command 'java' not found, but can be installed with:

apt install default-jre
apt install openjdk-11-jre-headless
apt install openjdk-8-jre-headless
apt install openjdk-9-jre-headless

```

4. Entonces, ejecutar:

```

$ [sudo] apt install default-jre

```

5. Verificar nuevamente la versión:

```

$ java -version

```

6. Esta vez, el output será algo como:

```

openjdk version "10.0.1" 2018-04-17
OpenJDK Runtime Environment (build 10.0.1+10-Ubuntu-3ubuntu1)
OpenJDK 64-Bit Server VM (build 10.0.1+10-Ubuntu-3ubuntu1, mixed mode)

```
7. Instalar JDK (Java Development Kit) ejecutando:

```

$ [sudo] apt install default-jdk

```
8. Verifica su versión:

```

$ javac -version

```
9. El output será algo como:

```

javac 10.0.1

```
**La última versión de Node.js es requerida**

1. Ejecutar:

```

$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm

```
2. Vericicar la versión instalada:
 ```
 
 $ nodejs -v
 
 ```
**Instalar codeceptJS**

1. Ejecutar:

```
[sudo] npm install -g codeceptjs webdriverio

```
2. Configurar codeceptjs, aceptando las configuraciones sugeridas, y seleccionando *webdriverio*:

```

$ codeceptjs init

```
 
 **Instalar selenium server standalone**
 
```
[sudo] npm install -g selenium-standalone
selenium-standalone install

```
Correr un caso de ejemplo
--------------------------

1.Levantar Selenium Server

```

$`selenium-standalone start

```

2.Correr el caso de prueba

```

$ codeceptjs run --steps

```
El output será:

```

My First Test --
  test something
   • I am on page "https://github.com"
   • I see "GitHub"
 ✓ OK
 
```








