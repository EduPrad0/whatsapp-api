dpradoeduardo.


# WEB-JS - Envio de mensagens via whatsapp
Aplicação em testes, para envio automatizado de mensagens no whatsapp

## Instalar

É necessário [Node.js](https://nodejs.org/) v14+ para executar.

Após clonar o repo, instale as dependências do projeto e rode o projeto localmente.

```sh
npm i / yarn
npm run server / yarn server
```

##### Para primeiro acesso, utilize o qrcode gerado no terminal e conecte com seu whatsapp 
#
#
#
#
# Utilizar
###### Para utilizar o app, utilize um serviço de requisiçoes (insomnia, postman) e aponte localmente e utilize esse corpo json

#
#
```
{
  "contacts": [
    "55119********", // Deve ser o número que está salvo no seu aparelho.
    "55119********" // Deve ser o número que está salvo no seu aparelho.
  ],
  "messages": [
    {"message": "Mensagem 1", "timeout": 3000},
    {"message": "Mensagem 2", "timeout": 4000}
  ]
}
```


Pronto, execute a req.


Example de curl
```
curl --request POST \
  --url http://localhost:3333/send-message \
  --header 'Content-Type: application/json' \
  --data '{
  "contacts": [
    "55119********", 
    "55119********"
  ],
  "messages": [
    {"message": "Mensagem 1", "timeout": 3000},
    {"message": "Mensagem 2", "timeout": 4000}
  ]
}'
```
