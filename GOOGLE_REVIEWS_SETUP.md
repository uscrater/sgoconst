# Google Reviews Integration - Setup Guide

## ✅ Implementação Completa

O site agora busca automaticamente o **número real de reviews** do Google!

## 📋 Como Funciona

1. **Busca Automática**: O site tenta buscar dados reais do Google Reviews
2. **Fallback Inteligente**: Se não configurado, usa dados de exemplo (125+ reviews)
3. **Cache**: Dados são atualizados a cada 1 hora para performance

## 🔧 Para Ativar Reviews Reais

### Passo 1: Obter Google Place ID

1. Acesse: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Procure pelo endereço da empresa: "35 Millview St, Taunton, MA 02780"
3. Copie o Place ID (formato: `ChIJ...`)

### Passo 2: Criar API Key do Google

1. Acesse: https://console.cloud.google.com/apis/credentials
2. Crie um novo projeto (se necessário)
3. Clique em "Create Credentials" > "API Key"
4. Ative a API "Places API" no projeto
5. Copie a API Key gerada

### Passo 3: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
GOOGLE_PLACE_ID=seu_place_id_aqui
GOOGLE_MAPS_API_KEY=sua_api_key_aqui
```

### Passo 4: Reiniciar o Servidor

```bash
npm run dev
```

## 📊 O Que Será Exibido

Com a API configurada, o site mostrará:
- ⭐ **Rating real** (ex: 4.8 estrelas)
- 📈 **Número real de reviews** (ex: "Based on 247+ Google Reviews")
- 💬 **Reviews reais** dos clientes (até 3 mais recentes)

Sem a API configurada:
- ⭐ 5.0 estrelas (padrão)
- 📈 "125+ Google Reviews" (exemplo)
- 💬 Reviews de exemplo

## 🎯 Benefícios

- ✅ Sempre atualizado automaticamente
- ✅ Aumenta credibilidade com dados reais
- ✅ Funciona mesmo sem configuração (fallback)
- ✅ Performance otimizada (cache de 1 hora)

## 📝 Arquivos Criados

- `lib/google-reviews.ts` - Função para buscar reviews
- `components/sections/Testimonials.tsx` - Componente atualizado
- `app/page.tsx` - Integração na home page

## 🔒 Segurança

- API Keys ficam no servidor (não expostas ao cliente)
- Dados são cacheados para reduzir custos
- Fallback garante que o site nunca quebre
