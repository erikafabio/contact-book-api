# **Contact Book API**

## Índice de Conteúdos

- [Instalando Dependências](#instalando-dependências)
- [Endpoints](#endpoints)
- [Sobre os testes](#sobre-os-testes)

## Instalando Dependências
[ Voltar ao Índice de Conteúdos ](#índice-de-conteúdos)

Para iniciar a api é necessário instalar as dependências presentes no package.json, utilize o comando:
````
yarn install
````

**Atenção** é necessário utilizar o `yarn` pois o projeto foi inicializado com esse gerados de pacotes.

Verifique se já possui o gerenciador yarn instalado:
````
yarn --version
````

Caso precise instalar o gerenciador:
````
npm install --global yarn
````

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```
Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

Para executar o servidor localmente use:
````
yarn dev
````

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```
---
## Endpoints
[ Voltar ao Índice de Conteúdos ](#índice-de-conteúdos)

### Índice

- [User](#1-users)
    - [POST - /users](#11-criação-de-usuário)
    - [GET - /users](#12-listando-todos-os-usuários)
	- [GET - /users/:id](#13-listar-usuário-por-id)
	- [PATCH - /users/:id](#14-atualizando-os-dados-do-usuário)
	- [DELETE - /users/:id](#15-deletar-usuário)
- [Login](#2-login) 
	- [POST - /login](#21-login-do-user)
- [Contact](#3-contacts)
	- [POST - /contact](#31-criação-de-contato)
	- [GET - /contact](#32-listando-todos-os-contatos)
	- [PATCH - /contact/:id](#33-atualizando-os-dados-do-contato)
	- [DELETE - /contact/:id](#34-deletar-contato)

---
## 1. **Users**
[ Voltar para os Endpoints ](#endpoints)

O objeto User é definido como:

| Campo      | Tipo   | Descrição                                     |
| -----------|---------|-----------------------------------------------------------------------|
| id         | string  | Identificador único do usuário                  					   |
| name       | string  | O nome do usuário.                              					   |
| email      | string  | O e-mail do usuário.                            					   |
| phoneNumber| string  | O telefone do usuário.                            					   |
| password   | string  | A senha de acesso do usuário                    					   |
| isAdm      | boolean | Define se um usuário é Administrador ou não.   					   |
| isActive   | boolean | Define se um usuário está ativo ou não.        					   |
| createdAt  | date    | Define a hora e data de criação do usuário.   						   |
| updatedAt  | date    | Define a hora e data da última atualização do uzuário.				   |  

### Endpoints

| Método   | Rota       		 | Descrição                               						|
|----------|---------------------|--------------------------------------------------------------|
| POST     | /users     		 | Criação de um usuário.                  						|
| GET      | /users     		 | Lista todos os usuários                 						|
| GET      | /users/:id     	 | Lista um usuário usando seu ID como parâmetro 				|
| PATCH    | /users/:id     	 | Atualiza os dados do usuário usando seu ID como parâmetro 	|
| DELETE   | /users/:id		     | Deleta um usuário através do seu ID passado como parâmetro 	|

---

### 1.1. **Criação de Usuário**
[ Voltar para os Endpoints ](#endpoints)
### `/users`

### Exemplo de Request:
```
POST /users
Host: https://localhost:3000/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json

{
    "name":"Lily Tucker Pritchett ",
    "email":"lily@vietnan.com.br",
    "phoneNumber": "9551583801",
    "password": "12346",
    "isAdm":true
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"name": "Lily Tucker Pritchett ",
	"email": "lily@vietnan.com.br",
	"phoneNumber": "9551583801",
	"isAdm": true,
	"id": "fc98a821-4e08-4333-954d-c0dbde668d6c",
	"createdAt": "2023-02-05T20:11:38.853Z",
	"updatedAt": "2023-02-05T20:11:38.853Z",
	"isActive": true
}
```

### Possíveis Erros:
| Código do Erro 	| Descrição 					|
|-------------------|-------------------------------|
| 400 Bad Request 	| Password is missing			|
| 400 Bad Request	| Email already exist.	    	|

---


### 1.2. **Listando todos os usuários**
[ Voltar aos Endpoints ](#endpoints)
### `/users`

### Exemplo de Request:
```
GET /users
Host: https://localhost:3000/
Authorization: Bearer {token}
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "fc98a821-4e08-4333-954d-c0dbde668d6c",
		"name": "Lily Tucker Pritchett ",
		"email": "lily@vietnan.com.br",
		"phoneNumber": "9551583801",
		"createdAt": "2023-02-05T20:11:38.853Z",
		"updatedAt": "2023-02-05T20:11:38.853Z",
		"isAdm": true,
		"isActive": true,
		"contact": []
	}
]
```

### Possíveis Erros:
| Código do Erro 	| Descrição 	|
|-------------------|---------------|
| 401 Unauthorized	| Invalid token	|

---

### 1.3. **Listar Usuário por ID**

[ Voltar aos Endpoints ](#endpoints)

### `/users/:id`

### Exemplo de Request:
```
GET /users/fc98a821-4e08-4333-954d-c0dbde668d6c
Host: https://localhost:3000/
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id    	  | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "fc98a821-4e08-4333-954d-c0dbde668d6c",
	"name": "Lily Tucker Pritchett ",
	"email": "lily@vietnan.com.br",
	"phoneNumber": "9551583801",
	"createdAt": "2023-02-05T20:11:38.853Z",
	"updatedAt": "2023-02-05T20:11:38.853Z",
	"isAdm": true,
	"isActive": true,
	"contact": []
}
```

### Possíveis Erros:
| Código do Erro 	| Descrição 	|
|-------------------|---------------|
| 401 Unauthorized	| Invalid token	|

### 1.4. **Atualizando os dados do Usuário**

[ Voltar aos Endpoints ](#endpoints)

### `/users/:id`
### Exemplo de Request:
```
PATCH /users/fc98a821-4e08-4333-954d-c0dbde668d6c
Host: https://localhost:3000/
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id    	  | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
    "name":"Lily Tucker-Pritchett "
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "fc98a821-4e08-4333-954d-c0dbde668d6c",
	"name": "Lily Tucker-Pritchett ",
	"email": "lily@vietnan.com.br",
	"phoneNumber": "9551583801",
	"createdAt": "2023-02-05T20:11:38.853Z",
	"updatedAt": "2023-02-05T20:37:15.456Z",
	"isAdm": true,
	"isActive": true
}
```

### Possíveis Erros:
| Código do Erro 	| Descrição 			|
|-------------------|-----------------------|
| 401 Unauthorized	| You cannot change this information|
| 404 Bad Request	| User not founded		|

### 1.5. **Deletar Usuário**

[ Voltar aos Endpoints ](#endpoints)

### `/users/:id`
### Exemplo de Request:
```
PATCH /users/fc98a821-4e08-4333-954d-c0dbde668d6c
Host: https://localhost:3000/
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id    	  | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
vazio
```

### Exemplo de Response:
```
204 NOT CONTENT
```
```json
vazio
```

### Possíveis Erros:
| Código do Erro 	| Descrição 		|
|-------------------|-------------------|
| 401 Unauthorized	| Invalid token		|
| 404 Bad Request	| User not founded	|

## 2. **Login**
[ Voltar para os Endpoints ](#endpoints)

O objeto de login é definido como:

| Campo      | Tipo    | Descrição							                                   |
| -----------|---------|-----------------------------------------------------------------------|
| email      | string  | O e-mail do usuário usado no cadastro.            					   |
| password   | string  | A senha de acesso do usuário criada no cadastro.  					   | 

### Endpoints

| Método   | Rota       		 | Descrição                               					   |
|----------|---------------------|-------------------------------------------------------------|
| POST     | /login     		 | Login do usuário.	                  					   |

### 2.1. **Login do user**
[ Voltar para os Endpoints ](#endpoints)

### `/login`

### Exemplo de Request:
```
POST /login
Host: https://localhost:3000/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"email":"lily@vietnan.com.br",
	"password": "12346"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{	
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6dHJ1ZSwiaWF0IjoxNjc1NjI4NzQ2LCJleHAiOjE2NzU2MzU5NDYsInN1YiI6ImZjOThhODIxLTRlMDgtNDMzMy05NTRkLWMwZGJkZTY2OGQ2YyJ9.ic83QvOZkC6HpgAo0XPeUB1X-NGzPcFXakhFLFSKIi4"
}
```

### Possíveis Erros:
| Código do Erro 	| Descrição 				|
|-------------------|---------------------------|
| 403 Forbidden		| Invalid email or password	|

---
## 3. **Contacts**
[ Voltar para os Endpoints ](#endpoints)

O objeto Contact é definido como:

| Campo      | Tipo   | Descrição                                     |
| -----------|---------|-----------------------------------------------------------------------|
| id         | string  | Identificador único do usuário                  					   |
| name       | string  | O nome do usuário.                              					   |
| email      | string  | O e-mail do usuário.                            					   |
| phoneNumber| string  | O telefone do usuário.                            					   |
| createdAt  | date    | Define a hora e data de criação do usuário.   						   |
| updatedAt  | date    | Define a hora e data da última atualização do uzuário.				   |  

### Endpoints

| Método   | Rota       		 | Descrição                               						|
|----------|---------------------|--------------------------------------------------------------|
| POST     | /contact     		 | Criação de um usuário.                  						|
| GET      | /contact     		 | Lista todos os usuários                 						|
| PATCH    | /contact/:id     	 | Atualiza os dados do usuário usando seu ID como parâmetro 	|
| DELETE   | /contact/:id		     | Deleta um usuário através do seu ID passado como parâmetro 	|

---

### 3.1. **Criação de Contato**
[ Voltar para os Endpoints ](#endpoints)
### `/contact`

### Exemplo de Request:
```
POST /contact
Host: https://localhost:3000/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json

{
	"name":"Cameron Tucker",
	"email":"cam@tucker.com.br",
	"phoneNumber": "9555884809"
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"name": "Cameron Tucker",
	"email": "cam@tucker.com.br",
	"phoneNumber": "9555884809",
	"user": {
		"id": "fc98a821-4e08-4333-954d-c0dbde668d6c",
		"name": "Lily Tucker-Pritchett ",
		"email": "lily@vietnan.com.br",
		"phoneNumber": "9551583801",
		"createdAt": "2023-02-05T20:11:38.853Z",
		"updatedAt": "2023-02-05T20:37:15.456Z",
		"isAdm": true,
		"isActive": true
	},
	"id": "8507050f-62bc-4467-8e89-bfbf7f7d3954",
	"createdAt": "2023-02-05T20:59:22.281Z",
	"updatedAt": "2023-02-05T20:59:22.281Z"
}
```

### Possíveis Erros:
| Código do Erro 	| Descrição 					|
|-------------------|-------------------------------|
| 404 Not Found 	| User not finded.			    |
| 400 Bad Request	| Email already exist.	    	|
| 400 Bad Request	| Phone number already exists. 	|

---


### 3.2. **Listando todos os contatos**
[ Voltar aos Endpoints ](#endpoints)
### `/contact`

### Exemplo de Request:
```
GET /contact
Host: https://localhost:3000/
Authorization: Bearer {token}
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "8507050f-62bc-4467-8e89-bfbf7f7d3954",
		"name": "Cameron Tucker",
		"email": "cam@tucker.com.br",
		"phoneNumber": "9555884809",
		"createdAt": "2023-02-05T20:59:22.281Z",
		"updatedAt": "2023-02-05T20:59:22.281Z"
	},
	{
		"id": "f2e4b8b6-7e66-43be-8b43-3cb24d6b31a2",
		"name": "Mitchell Pritchett",
		"email": "mit@pritchett.com.br",
		"phoneNumber": "9558341009",
		"createdAt": "2023-02-05T21:11:13.256Z",
		"updatedAt": "2023-02-05T21:11:13.256Z"
	}
]
```

### Possíveis Erros:
| Código do Erro 	| Descrição 	|
|-------------------|---------------|
| 401 Unauthorized	| Invalid token	|

---

### 3.3. **Atualizando os dados do Contato**

[ Voltar aos Endpoints ](#endpoints)

### `/contact/:id`
### Exemplo de Request:
```
PATCH /contact/f2e4b8b6-7e66-43be-8b43-3cb24d6b31a2
Host: https://localhost:3000/
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id    	  | string      | Identificador único do usuário (Contact) |

### Corpo da Requisição:
```json
{
    "email": "mitchell@pritchett.com.br"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "f2e4b8b6-7e66-43be-8b43-3cb24d6b31a2",
	"name": "Mitchell Pritchett",
	"email": "mitchell@pritchett.com.br",
	"phoneNumber": "9558341009",
	"createdAt": "2023-02-05T21:11:13.256Z",
	"updatedAt": "2023-02-05T21:18:22.095Z"
}
```

### Possíveis Erros:
| Código do Erro 	| Descrição 			|
|-------------------|-----------------------|
| 401 Unauthorized	| You cannot change this information|
| 404 Bad Request	| Contact not founded		|

### 3.4. **Deletar Contato**

[ Voltar aos Endpoints ](#endpoints)

### `/contact/:id`
### Exemplo de Request:
```
PATCH /contact/f2e4b8b6-7e66-43be-8b43-3cb24d6b31a2
Host: https://localhost:3000/
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id    	  | string      | Identificador único do usuário (Contact) |

### Corpo da Requisição:
```json
vazio
```

### Exemplo de Response:
```
204 NOT CONTENT
```
```json
vazio
```

### Possíveis Erros:
| Código do Erro 	| Descrição 		|
|-------------------|-------------------|
| 401 Unauthorized	| Invalid token		|
| 404 Bad Request	| Contact not found|

--
# 3. **Sobre os testes**
[ Voltar ao Índice de Conteúdos ](#índice-de-conteúdos)


Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/__tests__`.

Na subpasta `integration` estão os testes.

Já na subpasta `mocks` estão os dados que serão utilizados para os testes.

No arquivo `jest.config.json` estão algumas configurações necessárias para os testes rodarem.

**`De modo algum altere qualquer um desses arquivos.`** Isso poderá comprometer a integridade dos testes.

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.

<br>

# **Rodando os testes** 

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes
````
yarn test
````
#
### Rodar todos os testes e ter um log ainda mais completo
````
yarn test --all
````
#

### Rodar os testes de uma pasta específica
`detalhe: repare que tests está envolvido por 2 underlines. Isso se chama dunder.`
````
yarn test ./scr/__tests__/integration/<subpasta>
````
#
### Rodar os testes de um arquivo específico
````
yarn test ./scr/__tests__/integration/<subpasta>/<arquivo>
````
#
### Rodar um teste específico
````
yarn test -t <describe ou test específico envolto em aspas>
````
````
\\ ex: yarn test -t "/categories"
\\ rodaria os testes do describe "/categorias" no caminho
\\ ./scr/__tests__/integration/categories/categoriesRoutes.test.ts
````

<br>


**Caso você queira verificar todas as opções de execução de testes, visite a [Documentação oficial do Jest](https://jestjs.io/docs/cli)**

Após rodar um dos comandos aparecerá um log no seu terminal, contendo as informações da execução do teste.

**Observação:** O teste pode demorar alguns segundos para ser finalizado. Quanto maior for o teste, mais tempo será consumido para a execução.

#
