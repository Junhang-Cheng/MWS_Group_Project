import cv2
import base64

cap = cv2.VideoCapture(0)
while cap.isOpened():
    ret, frame = cap.read()
    cv2.imshow('Capture', frame)
    ret, buffer = cv2.imencode('.jpg', frame)
    global jpg_base64
    print(base64.b64encode(buffer))
    key = cv2.waitKey(1)
    if key & 0x00FF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()
