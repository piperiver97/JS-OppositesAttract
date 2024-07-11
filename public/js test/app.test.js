import { describe, it, expect } from "vitest";
import { isLove } from "../js/app.js";


describe("función isLove", () => {
  it("debería devolver true cuando una flor tiene pétalos pares y la otra tiene pétalos impares", () => {
    expect(isLove(1, 4)).toBe(true);   
    expect(isLove(0, 1)).toBe(true);   
  });

  it("debería devolver false cuando ambas flores tienen pétalos pares o ambas tienen pétalos impares", () => {
    expect(isLove(2, 2)).toBe(false); 
    expect(isLove(0, 0)).toBe(false);  
  });
});
