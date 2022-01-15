var icons = document.querySelectorAll('.icon');
var names = ["tan sovanarith","Pheab porpor","khun sopanha","Treach","kheang"]    
var pics = ["https://kissanimegirl.com/wp-content/uploads/2021/04/Snip20210629_64.png","https://p.favim.com/orig/2018/09/01/anime-animepfp-manga-Favim.com-6237803.png","https://wallpaperanime.id/animekeren/wp-content/uploads/2021/06/anime-aesthetic-pfp-boy-luxury-boy-aesthetic-profile-sad-anime-boy-pfp-for-boys-anime-of-anime-aesthetic-pfp-boy.jpg","https://64.media.tumblr.com/a220142427726317edd43d25e0660ccd/124eaf60f2628b92-87/s1280x1920/e8e0be4a75321959f2cf6a3eb386f9ecfefd6749.jpg","https://s11.favim.com/orig/7/766/7669/76690/icon-anime-pfp-Favim.com-7669047.jpg"];
var comments =["If there was an extra hour every day, what would you do with it?","What drink do you usually order with your food?","What did you have for dinner last night?","What did you do on your most recent birthday?","Would you be willing to reduce your life span by 10 years to become rich or famous?"];
var commentsSection = document.querySelector('.commentsSection');
var commentsBtn = document.querySelector('.comments');




console.log(commentsSection);

commentsClick();
createComments(5);
preload();
iconsClick();

var count = 0;
function commentsClick()
{
    commentsBtn.addEventListener('click',(e)=>{
       count++;
       if(count == 1)
       {
        commentsSection.style.display = "block"; 
        commentsSection.style.height = "100%"; 
       } else{
           count =0;
           commentsSection.style.display = "none"; 
           commentsSection.style.height = "100%"; 
       }
       

    });
}

function iconsClick() {
    for (let x = 0; x < icons.length; x++) {
        
        icons[x].addEventListener('click', function() {

            if (x == 0) {
                //like 
                var count = icons[x].children;
                var count_number = count[1].textContent;


                count[1].textContent = parseInt(count_number)+1;
                
            }
            if (x == 1) {
                //comments
                console.log('comments');


            }
            if (x == 2) {
                //share
                console.log('share');

            }
        });
    }
}
function preload()
{
    for(let x = 0;x<icons.length;x++)
    {
        icons[x].children[1].textContent = 5;
    }
}

function createComments(count)
{
    for(let x =0;x<count;x++)
    {
        var div = document.createElement('div');
        div.innerHTML =
        `
        <div class="person" >

        <div class="profile">
            <img src="${pics[x]}" alt="">                                
        </div>
        <div class="about">
            <h6 style="font-weight: bold; color: white;">${names[x]}</h6>
            <p>${comments[x]}</p>
        </div>
    </div>
        `;
        commentsSection.appendChild(div);
    }
}