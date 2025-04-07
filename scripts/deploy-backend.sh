#!/bin/bash

# Configurações
KEY_PATH=$1
EC2_USER="$EC2_USER"
EC2_IP="$EC2_IP"
REMOTE_DIR="~/backend"

# Cores para output
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}1. Limpando diretório remoto...${NC}"
ssh -i $KEY_PATH $EC2_USER@$EC2_IP "rm -rf $REMOTE_DIR/*"

echo -e "${GREEN}2. Copiando docker-compose para o EC2...${NC}"
rsync -avz -e "ssh -i $KEY_PATH" \
    ./backend/docker-compose.yml $EC2_USER@$EC2_IP:$REMOTE_DIR/

echo -e "${GREEN}3. Executando deploy no EC2...${NC}"
ssh -i $KEY_PATH $EC2_USER@$EC2_IP << ENDSSH
    # Configurar variável de ambiente para o Docker Compose
    export DOCKERHUB_USERNAME="${DOCKERHUB_USERNAME}"
    
    cd ~/backend
    
    # Fazer login no Docker Hub
    echo "${DOCKERHUB_TOKEN}" | docker login -u "${DOCKERHUB_USERNAME}" --password-stdin
    
    # Parar containers existentes e puxar nova imagem
    docker compose down
    docker compose pull
    docker compose up -d
    
    # Mostrar status dos containers
    docker compose ps
    
    echo "Deploy concluído!"
ENDSSH