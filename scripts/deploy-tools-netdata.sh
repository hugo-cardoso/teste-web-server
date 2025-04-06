#!/bin/bash

# Configurações
KEY_PATH=$1
EC2_USER="$EC2_USER"
EC2_IP="$EC2_IP"
REMOTE_DIR="~/netdata"

# Cores para output
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}1. Limpando diretório remoto...${NC}"
ssh -i $KEY_PATH $EC2_USER@$EC2_IP "rm -rf $REMOTE_DIR/*"

echo -e "${GREEN}2. Copiando arquivos para o EC2...${NC}"
rsync -avz -e "ssh -i $KEY_PATH" \
    --exclude 'node_modules' \
    --exclude '.git' \
    ./tools/netdata/* $EC2_USER@$EC2_IP:$REMOTE_DIR/

echo -e "${GREEN}2. Executando setup e deploy no EC2...${NC}"
ssh -i $KEY_PATH $EC2_USER@$EC2_IP << 'ENDSSH'
    cd ~/netdata
    
    # Parar containers existentes e reconstruir
    docker compose down
    docker compose up --build -d
    
    # Mostrar status dos containers
    docker compose ps
    
    echo "Deploy concluído!"
ENDSSH