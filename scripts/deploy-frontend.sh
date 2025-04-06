#!/bin/bash

# Configurações
KEY_PATH=$1
EC2_USER="$EC2_USER"
EC2_IP="$EC2_IP"
REMOTE_DIR="~/frontend"

# Cores para output
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}1. Limpando diretório remoto...${NC}"
ssh -i $KEY_PATH $EC2_USER@$EC2_IP "rm -rf $REMOTE_DIR/*"

echo -e "${GREEN}2. Copiando arquivos para o EC2...${NC}"
rsync -avz -e "ssh -i $KEY_PATH" \
    --exclude 'node_modules' \
    --exclude '.git' \
    ./frontend/* $EC2_USER@$EC2_IP:$REMOTE_DIR/

echo -e "${GREEN}2. Movendo arquivos para o diretório do Nginx...${NC}"
ssh -i $KEY_PATH $EC2_USER@$EC2_IP << 'ENDSSH'
    cd ~/frontend

    # Limpa o diretório do web server
    sudo rm -rf /var/www/teste-hcardoso/*
    echo "Diretório limpo!"
    
    # Copia todos os arquivos para o diretório do web server
    sudo cp -r . /var/www/teste-hcardoso
    echo "Arquivos copiados!"
    
    echo "Deploy concluído!"
ENDSSH