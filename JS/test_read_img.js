window.addEventListener('DOMContentLoaded', function(){

  // ファイルが選択されたら実行
  document.getElementById("upload_file").addEventListener('change', function(e){

    var file_reader = new FileReader();

    file_reader.addEventListener('load', function(e) {
  
      // img要素を作成
      var img_element = document.createElement('img');
      img_element.src = e.target.result;
      img_element.alt = "Fox";
  
      // img要素をページに挿入
      var article_element = document.getElementById('content1');
      article_element.append(img_element);
    });
  
    // ファイル内容をBase64にエンコードし、「data:〜」で始まるURL形式で取得
    file_reader.readAsDataURL(e.target.files[0]);
  });
});