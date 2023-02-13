import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

interface NomenclatureItem {
  legalForm: string;
  legalFormFullDescription: string;
  legalFormTransliterated: string;
  legalFormFullDescriptionTransliterated: string;
  isDefault: boolean;
  isActive: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  faTimes = faTimes;
  faPlus = faPlus;
  faMinus = faMinus;

  textareaValues!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.textareaValues = new FormGroup({
    //   'legal-form-bl': new FormControl('', Validators.required),
    //   'legal-form-description-bl': new FormControl(),
    // });

    this.textareaValues = this.formBuilder.group({
      'legal-form-bl': new FormControl('', Validators.maxLength(128)),
      'legal-form-description-bl': new FormControl(
        '',
        Validators.maxLength(128)
      ),
    });
  }

  onGetValues() {
    console.log(this.textareaValues.value);
    console.log(this.textareaValues.get('legal-form-description-bl')!.value);
  }

  onChange() {
    this.textareaValues.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  onCancel() {
    this.textareaValues.reset();
  }
}
