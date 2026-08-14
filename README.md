# Bruchez 3D

Catálogo online das minhas peças de impressão 3D — chaveiros, suportes, decoração, peças personalizadas e outras curiosidades. O objetivo é simples: a pessoa navega pelas categorias, vê a peça que quer e cai direto numa conversa no WhatsApp já com a mensagem pronta.

Site em produção: [bruchez.tech](https://bruchez.tech)

## Stack

- React + TypeScript
- Vite
- Roteamento simples feito na mão (`src/router.tsx`), sem lib externa
- CSS puro (`src/styles.css`)

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Estrutura

- `src/data.ts` — lista de produtos, categorias e o link do WhatsApp
- `src/pages/` — Home (catálogo) e página de produto
- `src/components/` — card de produto
- `public/products/` — fotos usadas no catálogo

## Editar o catálogo

Cada peça é um item em `src/data.ts` (nome, categoria, descrição, fotos). Pra adicionar uma peça nova, basta colocar as fotos em `public/products/` e criar uma entrada nova nesse arquivo.

## Contato

Botão de WhatsApp configurado para +55 48 9830-1531, com mensagem automática já preenchida (e personalizada por produto, quando a pessoa entra pela página da peça).
