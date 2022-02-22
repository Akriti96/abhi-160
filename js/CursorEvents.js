AFRAME.registerComponent("cursorevent", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },

  init: function () {
    this.handleMouseEnter();
    this.handleMouseLeave();
    this.handle_360Images();
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursorevent", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "orange",
        opacity: 1,
      });
    }
  },

  handleMouseEnter: function () {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },

  handleMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id === selectedItemId) {
          el.setAttribute("material", {
            color: "blue",
            opacity: 1,
          });
        }
      }
    });

  },

  handle_360Images: function () {
    this.el.addEventListener("click", (myimages) => {
      const placeContainer = document.querySelector("#places-container")
      const { state } = placeContainer.getAttribute("tour")
      if (state === "place-list") {
        const id = this.el.getAttribute("id")
        const placeId = ["taj-mahal", "eiffel-tower"]
        if (placeId.includes(id)) {
          placeContainer.setAttribute("tour", {
            state: "view",
            selectImageCard: id,
          })
        }

      }
      if (state === "view") {
        this.handleimage_icons()
      }
      if (state === "changeview") {
        this.handleimage_icons()
      }
      // console.log(placeContainer)
    })
  },

  handleimage_icons: function () {
    const el = this.el
    const id = el.getAttribute("id")
    const placeContainer = document.querySelector("#places-container")
    const { selectImageCard}  = placeContainer.getAttribute("tour")
    const Icon_id = ["place-1", "place-2", "place-3", "place-4"]
    if (Icon_id.includes(id)) {
      placeContainer.setAttribute("tour", {
        state: "changeview"
      })


      const sky = document.querySelector("#main-container")
      sky.setAttribute("material", {
        src: `./assets/360_images/${selectImageCard}/${id}.jpg`,
      })
      console.log(selectImageCard)
    }

  }
});
