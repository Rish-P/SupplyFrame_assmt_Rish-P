var btn = document.getElementById('getButton')
    factsArr = []
    function factsCollectorSuccess(res){
        
            //Pagination logic
            factsArr = res.facts
            
            const nav = document.getElementById('nav');
            const content = document.getElementById('showData');
            let pageIndex = 0;
            let itemsPerPage = 6;
            loadItems();
            function loadItems() {
                content.innerHTML = "";
                for (let i=pageIndex*itemsPerPage; i<(pageIndex*itemsPerPage)+itemsPerPage; i++) {
                    if (!factsArr[i]) { break }
                    const item = document.createElement('div');
                    item.innerHTML = `
                        <p><strong><i class="fa-solid fa-dog"></i> </strong> ${factsArr[i]}</p>
                    `;
                    content.append(item);
                }
                loadPageNav();
            }
            function loadPageNav() {
                nav.style.fontWeight = "bold"
                nav.innerHTML = "Page";
                for (let i=0; i<(factsArr.length/itemsPerPage); i++) {
                    
                    const span = document.createElement('span');
                    span.innerHTML = i+1;
                    span.classList.add('icons')
                    span.addEventListener('click', (e) => {
                        pageIndex = e.target.innerHTML-1;
                        loadItems();
                    });
                    if (i === pageIndex) {
                        span.style.fontSize = "2rem";
                        span.style.overflowWrap = "wrap"
                        span.style.width = "800px"
                        span.style.color = "orange"
                    }
                    nav.append(span);
                }
            }
    }
    btn.addEventListener('click',()=>{
        document.getElementById('loderComponent').classList.add('loader')
        setTimeout(() => {
          document.getElementById('loaderComponent').classList.remove('loader')
            document.getElementById('loaderComponent').classList.add('loader-off')
        }, 1000);
        
        setTimeout( () => {
           $.ajax({
        url: "http://localhost:3000/get",
        type: 'POST',
        success: factsCollectorSuccess
            });   
        }, 1000);
     
  
        
    })