"""One-off generator for placeholder assets so the site isn't full of
broken images before real client logos / photos are supplied.
Run: python3 generate_placeholders.py
"""
from PIL import Image, ImageDraw, ImageFont

BASE = "public/uploads"
INK = (33, 35, 31)
PRIMARY = (53, 71, 61)
PRIMARY_SOFT = (228, 233, 225)
LINE = (218, 216, 208)

def font(size):
    try:
        return ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", size)
    except OSError:
        return ImageFont.load_default()

def initials(name):
    words = [w for w in name.replace("&", " ").split() if w[0].isalpha()]
    letters = [w[0].upper() for w in words[:2]]
    return "".join(letters) or name[:2].upper()

def client_logo(path, name):
    w, h = 320, 130
    img = Image.new("RGB", (w, h), (255, 255, 255))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, w - 1, h - 1], outline=LINE, width=2)
    label = initials(name)
    f = font(40)
    bbox = d.textbbox((0, 0), label, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((w - tw) / 2, (h - th) / 2 - 8), label, fill=PRIMARY, font=f)
    img.save(path)

def photo(path, name):
    w = h = 400
    img = Image.new("RGB", (w, h), PRIMARY_SOFT)
    d = ImageDraw.Draw(img)
    label = initials(name)
    f = font(90)
    bbox = d.textbbox((0, 0), label, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((w - tw) / 2, (h - th) / 2 - 10), label, fill=PRIMARY, font=f)
    img.save(path)

def hero(path):
    w, h = 1920, 1080
    img = Image.new("RGB", (w, h), PRIMARY)
    d = ImageDraw.Draw(img)
    for y in range(h):
        t = y / h
        r = int(53 + (33 - 53) * t)
        g = int(71 + (35 - 71) * t)
        b = int(61 + (31 - 61) * t)
        d.line([(0, y), (w, y)], fill=(r, g, b))
    img.save(path, quality=88)

def project_image(path, label):
    w, h = 900, 600
    img = Image.new("RGB", (w, h), PRIMARY_SOFT)
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, w - 1, h - 1], outline=LINE, width=3)
    f = font(34)
    bbox = d.textbbox((0, 0), label, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((w - tw) / 2, (h - th) / 2), label, fill=PRIMARY, font=f)
    img.save(path)

def svg_icon(path):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<circle cx="24" cy="24" r="19" fill="none" stroke="rgb{PRIMARY}" stroke-width="3"/>
<circle cx="24" cy="24" r="7" fill="rgb{PRIMARY}"/>
</svg>'''
    with open(path, "w") as f:
        f.write(svg)

clients = {
    "pwd-rajasthan.png": "PWD Rajasthan",
    "pwd-haryana.png": "PWD Haryana",
    "jda.png": "Jaipur Development Authority",
    "riico.png": "Rajasthan State Industrial Development & Investment Corporation Ltd.",
    "jodhpur-da.png": "Jodhpur Development Authority",
    "rsrdc.png": "Rajasthan State Road Dev. & Const. Corp. Ltd.",
    "pdcor.png": "Project Development Company of Rajasthan Ltd.",
    "ridcor.png": "Road Infrastructure Development Company of Rajasthan Ltd.",
    "ilfs.png": "Infrastructure Leasing & Financial Services",
    "ces-india.png": "Consulting Engineering Services (India) Pvt. Ltd.",
    "louis-berger.png": "Louis Berger Group Inc.",
    "ruidp.png": "Rajasthan Urban Infrastructure Development Project",
    "umtc.png": "Urban Mass Transit Company Limited",
    "dk-infra.png": "D K Infrastructure Pvt. Ltd.",
    "gr-infra.png": "G R Infra Projects Limited",
    "om-metal.png": "Om Metal Infra Projects Ltd.",
    "ncc.png": "NCC Ltd.",
    "lt.png": "Larsen & Toubro Limited",
    "prl.png": "PRL Projects & Infrastructure Ltd.",
}

for filename, name in clients.items():
    client_logo(f"{BASE}/clients/{filename}", name)

photo(f"{BASE}/jane.jpg", "Jane Doe")
photo(f"{BASE}/john.jpg", "John Smith")

hero(f"{BASE}/home-bg.jpg")

project_image(f"{BASE}/projects/alpha1.jpg", "Project Alpha")
project_image(f"{BASE}/projects/alpha2.jpg", "Project Alpha")
project_image(f"{BASE}/projects/beta1.jpg", "Project Beta")

svg_icon(f"{BASE}/icons/alpha.svg")
svg_icon(f"{BASE}/icons/beta.svg")
svg_icon(f"{BASE}/icons/web.svg")
svg_icon(f"{BASE}/icons/consulting.svg")

print("Done")
