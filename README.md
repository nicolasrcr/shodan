# ShodanExame – Preparação para Faixa Preta de Judô

Curso completo de preparação para o Exame Shodan (Faixa Preta) de Judô.

## Stack

- React + Vite + TypeScript
- Tailwind CSS + shadcn/ui
- Lovable Cloud (Supabase) — Auth, DB, Edge Functions
- Mercado Pago — Pagamentos (PIX + Cartão)

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page |
| `/login` | Login |
| `/cadastro` | Cadastro |
| `/curso` | Curso (protegido) |
| `/conta` | Minha Conta |
| `/simulado` | Simulado (30 questões, 60min) |
| `/desempenho` | Histórico de tentativas |
| `/planos` | Planos e preços |
| `/admin` | Painel administrativo |
| `/payment-success` | Confirmação de pagamento |
| `/payment-failure` | Falha no pagamento |

## Edge Functions

- `mercadopago-checkout` — Cria preferência de pagamento (PIX ou Cartão)
- `mercadopago-webhook` — Processa notificações do Mercado Pago
- `create-admin` — Bootstrap de admin (protegido por secret)

## Criar Admin (Bootstrap)

1. Encontre o `userId` do usuário no banco de dados (tabela `profiles`)
2. Execute o curl:

```bash
curl -X POST https://ghmjjrmunjvuavnxukgi.supabase.co/functions/v1/create-admin \
  -H "Content-Type: application/json" \
  -H "x-admin-secret: SEU_ADMIN_BOOTSTRAP_SECRET" \
  -d '{"userId": "UUID_DO_USUARIO"}'
```

## Desenvolvimento Local

```sh
npm i
npm run dev
```

## Testes

```sh
npm test
```
