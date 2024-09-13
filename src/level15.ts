export default function getLevel() {
  return {
    playerPos: { x: 100, y: 1360 },
    goalPos: { x: 900, y: 760 },
    objects: [
      // floor
      { box: { pos: { x: -600, y: 1500 }, width: 2000, height: 150 } },
      // right wall
      { box: { pos: { x: 1200, y: 0 }, width: 200, height: 1500 } },
      // first plate
      { box: { pos: { x: 400, y: 1060 }, width: 800, height: 50 } },
    ],
  };
}
