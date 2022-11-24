window.addEventListener('DOMContentLoaded', function(){

  // ファイルが選択されたら実行
  document.getElementById("upload_file").addEventListener('change', function(e){

    var file_reader = new FileReader();

    // ファイルの読み込みを行ったら実行
    file_reader.addEventListener('load', function(e) {
      console.log(e.target.result);
           // コンソール出力例：
           // FileReaderを使った
           // テキストファイルからの読み込みテスト
      text = e.target.result;
      document.getElementById("message").innerText = text;
    });

    file_reader.readAsText(e.target.files[0]);
  });
});