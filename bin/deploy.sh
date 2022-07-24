DEPLOY_DIR=".deploy"
EXPORT_DIR="out"
BUCKET_NAME="thebreakingchanges.com"

yarn run build

cp -a $EXPORT_DIR/. $DEPLOY_DIR

modified_files=()

for filename in $DEPLOY_DIR/*.html; do
  original="$filename"
  filename=$(basename "$filename")
  filename="${filename%.*}"

  if [ $filename != "404" ] && [ $filename != "index" ];
  then
    mv $original $DEPLOY_DIR/$filename
    modified_files+=($filename)
  fi
done

aws s3 sync --delete $DEPLOY_DIR s3://$BUCKET_NAME --profile nilson_ljnr

for filename in ${modified_files[@]}; do
  aws s3 cp $DEPLOY_DIR/$filename s3://$BUCKET_NAME/$filename --content-type "text/html" --profile nilson_ljnr
done

rm -r $DEPLOY_DIR
