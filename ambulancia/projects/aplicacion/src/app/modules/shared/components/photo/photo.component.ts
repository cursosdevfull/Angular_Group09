import {
  Component,
  ElementRef,
  forwardRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { UtilsService } from '../../helpers/utils.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent implements OnInit {
  @ViewChild('photo') photo!: ElementRef;
  @ViewChild('file') file!: ElementRef;

  isUsingWebCam = false;
  statusHover = false;
  triggerSnapshot = new Subject<void>();
  constructor(private utilsService: UtilsService) {}

  onChange: any;
  onTouched: any;

  isDisabled = false;

  value!: File;

  writeValue(value: File) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  ngOnInit(): void {}

  fileUpload(file: File) {
    console.log(file);
    if (!file.type.startsWith('image/')) {
      this.utilsService.showNotification('No es una imagen');
      return;
    }

    this.onTouched();
    this.onChange(file);

    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.photo.nativeElement.style.backgroundImage = `url(${dataBase64})`;
      this.photo.nativeElement.innerHTML = '';
    };

    fr.readAsDataURL(file);
  }

  selectImage(event: any) {
    const file: File = event.target.files[0];
    this.fileUpload(file);
  }

  executeLoadImage() {
    this.file.nativeElement.click();
    return false;
  }

  changeOriginPhoto() {
    this.isUsingWebCam = !this.isUsingWebCam;
  }

  triggerAsObservable() {
    return this.triggerSnapshot.asObservable();
  }

  takePhoto() {
    this.triggerSnapshot.next();
  }

  capturePhotoFromWeb(webcamImage: WebcamImage) {
    fetch(webcamImage.imageAsDataUrl)
      .then((response) => response.arrayBuffer())
      .then(
        (buffer) => new File([buffer], 'webcam.jpg', { type: 'image/jpeg' })
      )
      .then((file) => {
        this.isUsingWebCam = false;
        this.fileUpload(file);
      });
  }
}
