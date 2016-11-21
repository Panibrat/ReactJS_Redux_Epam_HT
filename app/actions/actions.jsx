export var ShowAllHeroes  = () => {
  return {
      type: "SHOW_HEROES"
  };
};
export var ShowDashboard = () => {
    return {
        type: "SHOW_DASHBOARD",
    };
};

export var ShowHeroById = (id) => {
    return {
        type: "SHOW_HERO_DETAILS",
        id,
    };
};

export var ChoiseHeroById = (id) => {
    return {
        type: "SHOW_HERO_BOTTOM_DETAILS",
        id,
    };
};

export var changeHeroName = (id, newHeroName) => {
    return {
        type: "CHANGE_HERO_NAME",
        id,
        newHeroName,
    };
};
