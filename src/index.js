console.log("mushokuWalk loaded");

function createMenu() {
    setInterval(() => {
        if (document.getElementById("mushokuWalkMenu")) return;

        let nowPage = window.location.href;
        let uperElement = document.getElementsByClassName("hover:c_action.primaryAzure flex-g_1 fw_bold lc_2")[0].textContent;

        //if (uperElement == 'ボカロ曲匿名投稿イベント 無色透名祭') {
            let controllerElement = document.getElementsByClassName("w_100% p_base pb_x0_5 max-h_watchController.height bg-c_monotone.L15")[0];
            if (!controllerElement) {
                // メニューを置く場所がない場合、エラーメッセージを表示する
                let errorElement = document.createElement("div");
                errorElement.id = "mushokuWalkMenu";
                errorElement.textContent = "コントローラーを常に表示に設定してください。";
                errorElement.style.color = "red";
                errorElement.style.position = "fixed";
                errorElement.style.top = "10px";
                errorElement.style.left = "10px";
                errorElement.style.zIndex = "99999";
                errorElement.style.background = "white";
                errorElement.style.padding = "10px";
                errorElement.style.border = "1px solid red";
                document.body.appendChild(errorElement);
                return;
            }
            
            // divエレメントを作ってメニューとかを配置
            let menuElement = document.createElement("div");
            menuElement.id = "mushokuWalkMenu";
            document.body.appendChild(menuElement);

            // --- ボタン作成関数 ---
            function createButton(text, title, svgIcon, onClick) {
                let button = document.createElement("button");
                button.className = "mushoku-walk-button";
                button.title = title;
                
                button.innerHTML = svgIcon; // SVGアイコンを設定
                
                let textNode = document.createElement("span");
                textNode.textContent = text;
                button.appendChild(textNode);

                button.onclick = onClick;
                return button;
            }

            // --- SVGアイコン ---
            const backIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`;
            const laterIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H11v-6h2v4h3.5v2z"/></svg>`;
            const nextIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`;

            // 戻るボタン
            let backButton = createButton("戻る", "前のページに戻ります", backIcon, () => {
                window.history.back();
            });
            menuElement.appendChild(backButton);

            // 後で見るボタン
            let laterButton = createButton("後で見る", "「後で見る」リストに追加します", laterIcon, () => {
                addLink(nowPage);
                alert("後で見るリストに追加しました。");
            });
            menuElement.appendChild(laterButton);

            // 次へボタン
            let nextButton = createButton("次の動画へ", "リストの次の動画に移動します", nextIcon, () => {
                goNext(nowPage);
            });
            menuElement.appendChild(nextButton);
        //}
    }, 5000);
}

if (document.readyState === "loading") {
  document.addEventListener("popstate", createMenu);
} else {
    createMenu();
}
