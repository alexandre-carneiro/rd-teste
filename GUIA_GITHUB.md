# Guia para Criar Repositório no GitHub

## Passo 1: Criar o Repositório no GitHub

1. Acesse https://github.com e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha os dados:
   - **Repository name**: `tech-interview-rd-station` (ou outro nome de sua preferência)
   - **Description**: "Desafio Técnico - Recomendador de Produtos RD Station"
   - **Visibility**: Escolha **Public** (para enviar o link)
   - **NÃO marque** "Initialize this repository with a README" (já temos um)
   - **NÃO adicione** .gitignore ou license (já temos)
5. Clique em **"Create repository"**

## Passo 2: Preparar o Repositório Local

Execute os seguintes comandos no terminal, na pasta do projeto:

```bash
cd /home/alexandrecarneiro/projetos/rd/tech-interview-frontend-entry-level-main/monorepo

# Verificar se já está inicializado (deve estar)
git status

# Adicionar todos os arquivos (exceto os ignorados pelo .gitignore)
git add .

# Fazer o primeiro commit
git commit -m "feat: implementação completa do recomendador de produtos RD Station

- Implementada lógica de recomendação em recommendation.service.js
- Integração entre Form e App.js para atualização de recomendações
- Interface moderna e interativa com Tailwind CSS
- Testes unitários cobrindo todos os casos de uso
- Otimizações de performance usando Sets
- Documentação completa no README"
```

## Passo 3: Conectar com o Repositório Remoto

Após criar o repositório no GitHub, você verá uma página com instruções. Use o comando abaixo:

```bash
# Substitua SEU_USUARIO pelo seu usuário do GitHub
git remote add origin https://github.com/SEU_USUARIO/tech-interview-rd-station.git

# Verificar se foi adicionado corretamente
git remote -v
```

## Passo 4: Enviar para o GitHub

```bash
# Enviar para o GitHub (primeira vez)
git branch -M main
git push -u origin main
```

Se pedir autenticação:
- **Opção 1**: Use um Personal Access Token (recomendado)
  - Vá em GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Crie um novo token com permissão `repo`
  - Use o token como senha quando pedir

- **Opção 2**: Configure SSH (mais seguro a longo prazo)
  ```bash
  # Gerar chave SSH (se ainda não tiver)
  ssh-keygen -t ed25519 -C "seu_email@exemplo.com"
  
  # Copiar chave pública
  cat ~/.ssh/id_ed25519.pub
  
  # Adicionar no GitHub: Settings → SSH and GPG keys → New SSH key
  ```

## Passo 5: Verificar

1. Acesse seu repositório no GitHub
2. Verifique se todos os arquivos foram enviados
3. Confirme que o README está sendo exibido corretamente

## Estrutura Final do Repositório

```
tech-interview-rd-station/
├── .gitignore
├── README.md
├── IMPLEMENTACAO.md
├── LICENSE
├── package.json
├── lerna.json
├── install.sh
├── backend/
│   ├── package.json
│   └── db.json
└── frontend/
    ├── package.json
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   ├── services/
    │   └── ...
    └── ...
```

## Comandos Úteis

```bash
# Ver status do repositório
git status

# Ver histórico de commits
git log --oneline

# Adicionar mudanças futuras
git add .
git commit -m "descrição da mudança"
git push

# Ver diferenças antes de commitar
git diff
```

## Dicas Finais

1. **README**: Certifique-se de que o README.md está completo e claro
2. **Commits**: Faça commits descritivos e organizados
3. **Branch**: Se quiser trabalhar em uma branch separada:
   ```bash
   git checkout -b feature/nome-da-feature
   git push -u origin feature/nome-da-feature
   ```

## Pronto! 🎉

Agora você pode compartilhar o link do repositório com a RD Station!
