#!/bin/bash
# Auto push script for hello-nishu

while true
do
    git add .
    git commit -m "Auto update on $(date)"
    git push origin main
    echo "✅ Changes pushed to GitHub at $(date)"
    sleep 60   # check every 1 minute
done

