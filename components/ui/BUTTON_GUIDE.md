# Button Component - Design System

## Componente de Botão Padronizado

Todos os botões do projeto agora usam um único componente com variações consistentes seguindo a paleta **Red, Black, White**.

## Uso Básico

```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary" size="lg" rounded="full">
  Click Me
</Button>
```

## Variantes (variant)

### `primary` (padrão)
- **Cor:** Vermelho (#C21212)
- **Texto:** Branco
- **Uso:** CTAs principais, ações primárias
- **Efeito:** Hover com scale e sombra

```tsx
<Button variant="primary">Get a Quote</Button>
```

### `secondary`
- **Cor:** Preto
- **Texto:** Branco
- **Uso:** Ações secundárias importantes
- **Efeito:** Hover com scale e sombra

```tsx
<Button variant="secondary">Learn More</Button>
```

### `outline`
- **Cor:** Transparente com borda vermelha
- **Texto:** Vermelho
- **Uso:** Ações alternativas, botões secundários
- **Efeito:** Hover preenche com vermelho

```tsx
<Button variant="outline">View Projects</Button>
```

### `ghost`
- **Cor:** Transparente
- **Texto:** Preto
- **Uso:** Ações sutis, links de navegação
- **Efeito:** Hover com fundo cinza claro

```tsx
<Button variant="ghost">Cancel</Button>
```

### `link`
- **Estilo:** Link com sublinhado
- **Texto:** Vermelho
- **Uso:** Links textuais, navegação inline

```tsx
<Button variant="link">Read more</Button>
```

## Tamanhos (size)

### `sm` - Pequeno
- **Altura:** 36px (h-9)
- **Padding:** 16px horizontal
- **Texto:** Extra pequeno (text-xs)
- **Uso:** Botões compactos, headers

```tsx
<Button size="sm">Small Button</Button>
```

### `md` - Médio (padrão)
- **Altura:** 48px (h-12)
- **Padding:** 24px horizontal
- **Texto:** Extra pequeno (text-xs)
- **Uso:** Botões padrão em formulários

```tsx
<Button size="md">Medium Button</Button>
```

### `lg` - Grande
- **Altura:** 56px (h-14)
- **Padding:** 32px horizontal
- **Texto:** Pequeno (text-sm)
- **Uso:** CTAs principais, hero sections

```tsx
<Button size="lg">Large Button</Button>
```

### `xl` - Extra Grande
- **Altura:** 64px (h-16)
- **Padding:** 40px horizontal
- **Texto:** Base (text-base)
- **Uso:** CTAs muito destacados, mobile menus

```tsx
<Button size="xl">Extra Large</Button>
```

## Arredondamento (rounded)

### `none` - Sem arredondamento
```tsx
<Button rounded="none">Square Button</Button>
```

### `sm` - Pequeno
```tsx
<Button rounded="sm">Slightly Rounded</Button>
```

### `md` - Médio (padrão)
```tsx
<Button rounded="md">Medium Rounded</Button>
```

### `lg` - Grande
```tsx
<Button rounded="lg">Large Rounded</Button>
```

### `full` - Totalmente arredondado (pill)
```tsx
<Button rounded="full">Pill Button</Button>
```

## Combinações Comuns

### CTA Principal (Hero)
```tsx
<Button variant="primary" size="lg" rounded="md">
  Free Consultation
</Button>
```

### CTA Secundário (Hero)
```tsx
<Button variant="outline" size="lg" rounded="md">
  View Projects
</Button>
```

### Botão de Header
```tsx
<Button variant="primary" size="sm" rounded="none">
  Get a Quote
</Button>
```

### Botão de Formulário
```tsx
<Button variant="primary" size="md" rounded="md" className="w-full">
  Submit
</Button>
```

### Botão Pill (Gallery, About)
```tsx
<Button variant="primary" size="lg" rounded="full">
  Learn More
</Button>
```

## Uso com Links (asChild)

Para usar o botão como um link Next.js:

```tsx
import Link from "next/link"

<Button asChild variant="primary" size="lg">
  <Link href="/about">
    Learn More
  </Link>
</Button>
```

## Ícones

Ícones são automaticamente espaçados com `gap-2`:

```tsx
import { ArrowRight } from "lucide-react"

<Button variant="primary">
  Get Started
  <ArrowRight className="w-4 h-4" />
</Button>
```

## Classes Customizadas

Você pode adicionar classes adicionais quando necessário:

```tsx
<Button 
  variant="primary" 
  size="lg" 
  className="w-full md:w-auto"
>
  Responsive Button
</Button>
```

## Estados

### Disabled
```tsx
<Button disabled>Disabled Button</Button>
```

### Loading (adicione seu próprio spinner)
```tsx
<Button disabled>
  <Loader2 className="w-4 h-4 animate-spin" />
  Loading...
</Button>
```

## Acessibilidade

- Todos os botões têm `focus-visible:ring` para navegação por teclado
- Use `aria-label` quando o texto não for descritivo
- Botões de ícone devem ter texto acessível

```tsx
<Button variant="ghost" size="sm" aria-label="Close menu">
  <X className="w-4 h-4" />
</Button>
```
