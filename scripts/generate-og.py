#!/usr/bin/env python3
"""Generate public/og.png (1200x630) for Open Graph previews.

Pure typography on warm paper, matching the site's visual system.
Requires Pillow and macOS system fonts (Georgia, Helvetica).

Usage: python3 scripts/generate-og.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og.png"

PAPER = (246, 241, 231)
INK = (38, 33, 26)
INK_SOFT = (95, 87, 74)
HAIRLINE = (224, 214, 196)
ACCENT = (138, 59, 42)

SUPPLEMENTAL = Path("/System/Library/Fonts/Supplemental")
SERIF = SUPPLEMENTAL / "Georgia.ttf"
SERIF_ITALIC = SUPPLEMENTAL / "Georgia Italic.ttf"
SANS = Path("/System/Library/Fonts/Helvetica.ttc")

W, H = 1200, 630
MARGIN = 96


def spaced_text(draw, xy, text, font, fill, spacing):
    """Draw text with letter-spacing (Pillow has no native tracking)."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + spacing
    return x


def main():
    img = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(img)

    # Inner hairline frame.
    d.rectangle([28, 28, W - 28, H - 28], outline=HAIRLINE, width=2)

    kicker_font = ImageFont.truetype(str(SANS), 25)
    name_font = ImageFont.truetype(str(SERIF), 118)
    sub_font = ImageFont.truetype(str(SERIF_ITALIC), 33)
    url_font = ImageFont.truetype(str(SANS), 22)

    # Accent rule.
    d.rectangle([MARGIN, 142, MARGIN + 72, 147], fill=ACCENT)

    # Kicker.
    spaced_text(d, (MARGIN, 176), "SOFTWARE ENGINEER", kicker_font, INK_SOFT, 5)

    # Name with an accent full stop.
    name = "Hung Doan"
    d.text((MARGIN - 6, 236), name, font=name_font, fill=INK)
    name_w = d.textlength(name, font=name_font)
    d.text((MARGIN - 6 + name_w + 6, 236), ".", font=name_font, fill=ACCENT)

    # Subline.
    d.text(
        (MARGIN, 428),
        "Cloud data systems · M.S. in Artificial Intelligence, UT Austin 2026",
        font=sub_font,
        fill=INK_SOFT,
    )

    # URL, bottom left.
    d.text((MARGIN, 532), "hungngdoan.github.io/hung-doan", font=url_font, fill=INK_SOFT)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
