import OBR from "@owlbear-rodeo/sdk";

const ID = "com.asakim.scs-tracker";

export function setupContextMenu() {
  OBR.contextMenu.create({
    id: `${ID}/context-menu`,
    icons: [
      {
        icon: "/add.svg",
        label: "Add to scs tracker",
        filter: {
          every: [{ key: "layer", value: "CHARACTER" }],
        },
      },
    ],
    onClick() {},
  });
}

const previousPhase = () => {
  console.log('previous');
}

const nextPhase = () => {
  console.log('next');
}