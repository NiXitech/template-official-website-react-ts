if [ "$CF_PAGES_BRANCH" == "main" ]; then
  npm run build
else
  npm run build:qa
fi
