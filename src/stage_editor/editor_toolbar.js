export class EditorToolbarUI {
  constructor() {
    this.tools = ['SELECT', 'PLATFORM', 'HAZARD', 'SPAWN', 'ERASE'];
    this.activeTool = 'PLATFORM';
  }

  setTool(toolName) {
    if (this.tools.includes(toolName)) {
      this.activeTool = toolName;
    }
  }

  render(ctx, width = 1280) {
    ctx.save();
    ctx.fillStyle = 'rgba(20, 20, 25, 0.9)';
    ctx.fillRect(0, 0, width, 50);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    let xOffset = 30;

    this.tools.forEach(tool => {
      const isActive = tool === this.activeTool;
      ctx.fillStyle = isActive ? '#00ffcc' : '#aaaaaa';
      ctx.fillText(`[${tool}]`, xOffset, 32);
      xOffset += 110;
    });

    ctx.restore();
  }
}
