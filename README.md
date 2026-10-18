# Landing page — Aline

Site estático (HTML + CSS + JS, sem build) para divulgar os serviços de gestão de projetos, processos e operações, lançamentos e funis.

## Personalizar

Em `index.html`, procure e troque:

- `55XXXXXXXXXXX` → número de WhatsApp (DDI + DDD + número, só dígitos)
- `contato@exemplo.com` → e-mail
- Links de Instagram e LinkedIn no rodapé
- Números da seção de estatísticas (`data-count="..."`)
- Foto: substitua o bloco `.photo-placeholder` por `<img src="aline.jpg" alt="Foto da Aline">` e coloque a imagem na raiz

## Rodar localmente

```bash
npx serve .
```

## Publicar na Vercel

Pelo painel: importe o repositório em vercel.com/new (Framework: **Other**, sem build command).

Pela CLI:

```bash
npm i -g vercel
vercel --prod
```
