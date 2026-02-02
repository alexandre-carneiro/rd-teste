# Teste Técnico - Recomendador de Produtos RD Station

Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web existente.

## Missão

Sua missão é desenvolver a funcionalidade central de recomendação de produtos dentro de uma aplicação React.js pré-existente. Você deverá implementar a lógica que permite aos usuários selecionar suas preferências e funcionalidades desejadas, e então receber recomendações de produtos correspondentes.

## Contexto

Este projeto é parte de uma etapa técnica do processo seletivo para a vaga de desenvolvedor front-end na RD Station. A estrutura básica da aplicação já está construída com React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos.

Seu foco deve ser na implementação da lógica de recomendação e na integração desta funcionalidade com a interface do usuário existente. A aplicação já possui um layout básico utilizando Tailwind CSS.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo

## Requisitos Técnicos

### Familiaridade com Tailwind CSS

O layout da aplicação foi desenvolvido utilizando Tailwind CSS. Familiaridade básica com este framework de CSS utilitário será útil para entender e potencialmente modificar o layout existente.

### Versão do Node.js

Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `n` ou `nvm`.

#### Usando `n` (Node Version Manager):

1. Instale `n` globalmente (caso ainda não tenha): npm install -g n

2. Instale e use a versão 18.3 do Node.js: n 18.3

#### Usando `nvm` (Node Version Manager):

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3

Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.

## Foco do Desenvolvimento

Para completar este teste, você deve concentrar-se principalmente em três arquivos específicos:

1. `App.js`: Neste componente, você encontrará o comentário "Dadas atualizações no formulário, necessário atualizar a lista de recomendações". Implemente a lógica necessária para atualizar a lista de recomendações com base nas entradas do usuário.

2. `Form.js`: Este componente contém o comentário "Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações". Desenvolva a lógica para processar as entradas do usuário e gerar as recomendações apropriadas.

3. `recommendation.service.js`: Neste arquivo de serviço, você verá o comentário "Crie aqui a lógica para retornar os produtos recomendados." Implemente a lógica de negócios para determinar quais produtos devem ser recomendados com base nos critérios fornecidos.

## Observações Adicionais

- Sinta-se à vontade para implementar melhorias na cobertura de testes e no layout da aplicação, caso tenha tempo adicional.
- O código existente serve como base para sua implementação. Concentre-se em desenvolver a funcionalidade de recomendação de produtos conforme especificado nos requisitos do projeto e nos arquivos mencionados acima.

## Requisitos

- Implementar a lógica de recomendação de produtos com base nas preferências do usuário.
- Utilizar React.js para o desenvolvimento do front-end.
- Consumir a API fornecida pelo json-server para obter os dados dos produtos.
- Seguir as boas práticas de desenvolvimento e organização de código.
- Implementar testes unitários para as funcionalidades desenvolvidas.

## Como Executar

### Pré-requisitos

- Node.js versão 18.3 ou superior
- Yarn ou npm instalado

### Instalação

1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
2. Instale as dependências do projeto raiz: `yarn install` ou `npm install`
3. Instale as dependências do backend: `cd backend && yarn install` ou `npm install`
4. Instale as dependências do frontend: `cd frontend && yarn install` ou `npm install`
5. (Opcional) Execute o script de instalação: `./install.sh`

### Executando a Aplicação

**Opção 1 - Executar tudo de uma vez (Recomendado):**
```bash
npm run dev
# ou
yarn dev
```

**Opção 2 - Executar separadamente:**

Terminal 1 - Backend:
```bash
cd backend
npm start
# ou
yarn start
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
# ou
yarn start
```

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.

### Executando Testes

```bash
cd frontend
npm test
# ou
yarn test
```

### Acessando a Aplicação

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/products

## Critérios de Aceite

1. O serviço de recomendação de produtos deve ser capaz de receber as preferências e funcionalidades desejadas do usuário através de um formulário.
2. O serviço deve retornar recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço deve retornar apenas um produto que corresponda melhor às preferências e funcionalidades do usuário.
4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço deve retornar uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço deve retornar o último produto que atende aos critérios de seleção.
6. O serviço deve ser capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
7. O serviço deve ser modular e facilmente extensível para futuras atualizações e adições de funcionalidades.

Certifique-se de que todos os critérios de aceite são atendidos durante o desenvolvimento do projeto.

## Implementação

### Arquivos Principais Desenvolvidos

1. **`frontend/src/App.js`**
   - Implementada a função `handleRecommendationsChange` para atualizar a lista de recomendações
   - Integração entre o formulário e a lista de recomendações

2. **`frontend/src/components/Form/Form.js`**
   - Implementada a lógica de processamento do formulário
   - Validação de dados antes de submeter
   - Integração com o serviço de recomendações

3. **`frontend/src/services/recommendation.service.js`**
   - Implementada a lógica de negócios para cálculo de recomendações
   - Função `calculateMatchScore`: calcula pontuação de correspondência usando Sets para lookup O(1)
   - Função `getRecommendations`: retorna produtos recomendados baseado em preferências e features
   - **Complexidade otimizada:**
     - `calculateMatchScore`: O(n + m) onde n = preferências do produto, m = features do produto
       - Usa `Set.has()` para lookup O(1) em vez de `Array.includes()` O(n)
     - `getRecommendations`:
       - SingleProduct: O(p * (n + m)) - linear no número de produtos
       - MultipleProducts: O(p * (n + m) + p log p) - linear + ordenação
       - Onde: p = produtos, n = preferências médias por produto, m = features médias por produto
   - **Otimização:** Conversão de arrays para Sets uma única vez, reduzindo complexidade de O(p * (n + m) * s) para O(p * (n + m)) onde s era o tamanho dos arrays selecionados

### Funcionalidades Implementadas

✅ Recebimento de preferências e funcionalidades via formulário  
✅ Cálculo de recomendações baseado em correspondências  
✅ Modo SingleProduct: retorna um produto (melhor match ou último em caso de empate)  
✅ Modo MultipleProducts: retorna lista ordenada por pontuação  
✅ Tratamento de casos extremos (arrays vazios, sem correspondências)  
✅ Interface melhorada com feedback visual e validações  
✅ Testes unitários cobrindo todos os casos de uso  

### Melhorias Implementadas

- Interface moderna e interativa com Tailwind CSS
- Feedback visual em tempo real
- Validação de formulário antes de submeter
- Cards visuais para exibição de recomendações
- Mensagens de erro e loading claras
- Código limpo e bem documentado
- Testes adicionais para casos extremos

### Estrutura de Dados

O serviço de recomendação espera os seguintes dados:

```javascript
formData = {
  selectedPreferences: ['preferência1', 'preferência2'],
  selectedFeatures: ['feature1', 'feature2'],
  selectedRecommendationType: 'SingleProduct' | 'MultipleProducts'
}
```

### Algoritmo de Recomendação

**Complexidade e Otimizações:**

O algoritmo foi otimizado usando estruturas de dados eficientes:

1. **Conversão para Sets**: Arrays de preferências e features selecionadas são convertidos para `Set` uma única vez
   - Lookup O(1) com `Set.has()` em vez de O(n) com `Array.includes()`
   - Reduz complexidade de O(p * (n + m) * s) para O(p * (n + m))
   - Onde s = tamanho dos arrays selecionados

2. **Cálculo de Pontuação** (`calculateMatchScore`):
   - Itera sobre preferências e features do produto: O(n + m)
   - Verifica existência em Set: O(1) por verificação
   - Complexidade total: O(n + m)

3. **Processo de Recomendação** (`getRecommendations`):
   - Converte arrays para Sets: O(s) onde s = tamanho dos arrays selecionados
   - Calcula pontuação para cada produto: O(p * (n + m))
   - Filtra produtos com pontuação > 0: O(p)
   - **SingleProduct**: Encontra melhor match em uma passada: O(p)
     - Complexidade total: O(s + p * (n + m))
   - **MultipleProducts**: Ordena produtos por pontuação: O(p log p)
     - Complexidade total: O(s + p * (n + m) + p log p)

**Passos do Algoritmo:**

1. Validação de entrada (arrays vazios, sem tipo selecionado)
2. Conversão de arrays selecionados para Sets (otimização)
3. Calcula pontuação para cada produto (matches de preferências + matches de features)
4. Filtra produtos com pontuação > 0
5. Para SingleProduct: retorna produto com maior pontuação (último em caso de empate)
6. Para MultipleProducts: retorna todos ordenados por pontuação (maior primeiro)

**Por que Sets?**

- `Array.includes()` tem complexidade O(n) - precisa verificar cada elemento
- `Set.has()` tem complexidade O(1) - acesso direto via hash
- Para múltiplas verificações, Sets são muito mais eficientes
- Trade-off: O(s) para criar o Set, mas economiza O(p * (n + m) * s) em verificações

## Autor

Desenvolvido por Alexandre Carneiro

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
