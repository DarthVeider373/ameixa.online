
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    
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
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          function scheduleRandomUpdate(element) {
            const min = parseInt(element.dataset.min) || 400;
            const max = parseInt(element.dataset.max) || 700;
            
            const randomDelay = Math.random() * 3000;
            
            setTimeout(() => {
              try {
                let current = parseInt(element.innerText);
                
                // Initialize if not a valid number
                if (isNaN(current)) {
                  current = atomiRdn(min, max);
                }
                
                // Apply increment (-1 to +2) and clamp within bounds
                const increment = atomiRdn(-5, 7);
                const newValue = Math.max(min, Math.min(max, current + increment));
                
                element.innerText = newValue.toString();
                
                // Schedule the next update with a new random delay
                scheduleRandomUpdate(element);
              } catch (error) {
                console.log('Random update error:', error);
              }
            }, randomDelay);
          }

          // Initialize random updates for each element
          document.querySelectorAll('.atomicat-random').forEach(el => {
            scheduleRandomUpdate(el);
          });
        } catch (error) {
          console.log(error);
        }
      })();
    (function() {
          try {
              const clickeventList = [{"compKey":"3861fdd","misc":{"type":"text"}},{"compKey":"e838b19","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();