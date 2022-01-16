import face_recognition
from PIL import Image

#load local image
image = face_recognition.load_image_file("image0.jpg")
face_locations = face_recognition.face_locations(image)

  
top, right, bottom, left = face_locations[0]
face_image = image[top:bottom, left:right]
pil_image = Image.fromarray(face_image)
#output new face image
pil_image.save(fp=“image0_out.jpg”)