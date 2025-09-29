console.log("mushokuWalk loaded");

function createMenu() {
    setInterval(() => {
        if (document.getElementById("mushokuWalkMenu")) return;

        let nowPage = window.location.href;
        let uperElement = document.getElementsByClassName("hover:c_action.primaryAzure flex-g_1 fw_bold lc_2")[0].textContent;

        //if (uperElement == 'ボカロ曲匿名投稿イベント 無色透名祭') {
            let controllerElement = document.getElementsByClassName("w_100% p_base pb_x0_5 max-h_watchController.height bg-c_monotone.L15")[0];
            if (!controllerElement) {
                menuElement.textContent = "コントローラーを常に表示に設定してください。"
                return;
            }
            // divエレメントを作ってメニューとかを配置
            let menuElement = document.createElement("div");
            menuElement.id = "mushokuWalkMenu";
            menuElement.style.position = "fixed";
            menuElement.style.top = "10px";
            menuElement.style.left = "10px";
            menuElement.style.zIndex = "99999";
            menuElement.style.background = "#d49650";
            menuElement.style.width = "800px";
            menuElement.style.height = "50px";

            // Flexbox で中央揃え
            menuElement.style.display = "flex";
            menuElement.style.alignItems = "center";   // 縦中央
            menuElement.style.justifyContent = "center"; // 横中央

            document.body.appendChild(menuElement);

            // ボタン
            let laterButton = document.createElement("img");
            laterButton.src = chrome.runtime.getURL("assets/laterButton.png");
            laterButton.style.height = "90px";
            laterButton.style.cursor = "pointer";
            laterButton.title = "後で";
            laterButton.onclick = function() {
                addLink(nowPage);
                alert("後で見るリストに追加しました。");
            }
            menuElement.appendChild(laterButton);
        //}
    }, 5000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createMenu);
} else {
    createMenu();
}
