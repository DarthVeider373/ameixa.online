
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    (function() {
          try {
              const animationList = [{"key":"1f601d7","type":"text"}];
    
              animationList.forEach((animationItem, index) => {
                const { key, type } = animationItem;
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('a-e-a-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('a-e-a-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              return error;
          }
      })();
      (function() {
        try {
          setTimeout(() => {
            let elementsWithDelayClass = document.querySelectorAll(".atomicat-delay");
            if(elementsWithDelayClass){
              elementsWithDelayClass.forEach(element => {
                element.classList.remove("atomicat-delay");
              });
            }
            
          }, 432000);
        } catch (error) {
          console.log(error);
        }
      })();
    