export class OnlineLobbyUI {
  constructor(roomsList) {
    this.rooms = roomsList;
    this.selectedIndex = 0;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = '#111818';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ONLINE ARENA ROOMS', width / 2, 80);

    let startY = 180;
    this.rooms.forEach((room, i) => {
      const isSelected = i === this.selectedIndex;
      ctx.fillStyle = isSelected ? '#00ffcc' : '#223333';
      ctx.fillRect(200, startY, width - 400, 60);

      ctx.fillStyle = isSelected ? '#000000' : '#ffffff';
      ctx.font = '18px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`Room: ${room.name} (${room.playersCount}/4 players)`, 230, startY + 35);
      startY += 80;
    });

    ctx.restore();
  }
}
