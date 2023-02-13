import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface NomenclatureItem {
  legalForm: string;
  legalFormFullDescription: string;
  legalFormTransliterated: string;
  legalFormFullDescriptionTransliterated: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  faTimes = faTimes;

  textareaValues!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  nomenclatureItems: NomenclatureItem[] = [];
  successMessage!: string;
  item!: NomenclatureItem;

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
      'legal-form-full-description-en': new FormControl(
        '',
        Validators.maxLength(128)
      ),
      'legal-form-description-transliterated-en': new FormControl(
        '',
        Validators.maxLength(128)
      ),
    });

    this.addNewForm();
  }

  addNewForm() {
    this.nomenclatureItems.push({
      legalForm: '',
      legalFormFullDescription: '',
      legalFormTransliterated: '',
      legalFormFullDescriptionTransliterated: '',
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
