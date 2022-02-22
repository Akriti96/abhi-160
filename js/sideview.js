AFRAME.registerComponent("placeside-view", {
    schema: {},
    init: function () {
        this.createplaces_icon()
    },

    tick: function () {
        const placeContainer= document.querySelector("#places-container")
        const {state}=placeContainer.getAttribute("tour")
        if(state === "view" || state === "changeview"){
            this.el.setAttribute("visible",true)
        }
        else{
            this.el.setAttribute("visible",false) 
        }

    },

   
      createplaces_icon(){
          const ImageIcons= document.querySelector("#side-view-images")
          let xposition= -130
          let yposition=30;
          let zposition=-20;

          for(var i=1; i<=4; i++){
           const position={
               x:xposition+=50,
               y:yposition,
               z:zposition,
           }

           const entity= this.createIcon(position,i)
           ImageIcons.appendChild(entity)

          }

      },
      
      createIcon:function(position,id){
        const entity= document.createElement("a-entity")
        entity.setAttribute("visible",true)
        // place1,place2, place3, place4
        entity.setAttribute("id",`place-${id}`)
        entity.setAttribute("geometry",{
            primitive:"circle",
            radius:3
        })
        entity.setAttribute("material",{
            color:"white"
        })
        entity.setAttribute("position",position)
        entity.setAttribute("cursorevent",{})
        return entity
    },


})