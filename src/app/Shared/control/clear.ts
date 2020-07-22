<div class="col" [formGroup]="group" [ngSwitch]="field.type">
      <div *ngSwitchCase="'text'" class="form-group">
        <label>{{ field.label }}</label>
        <input
          [ngClass]="{
            'is-invalid': group.controls[field.key].status === 'INVALID',
            'is-valid': group.controls[field.key].status === 'VALID'
          }"
          formControlName="{{ field.key }}"
          type="{{ field.type }}"
          name="{{ field.key }}"
          class="form-control form-control-sm"
          placeholder="{{ field.label }}"
        />
        <div class="row" style="font-size:0.6em;">
          <div *ngFor="let rule of field.rules">
            {{ rule.type + "(" + rule.value + ")  ,  " }}
          </div>
        </div>
      </div>

      <div *ngSwitchCase="'date'" class="form-group">
        <label>{{ field.label }}</label>
        <input
          [ngClass]="{
            'is-invalid': group.controls[field.key].status === 'INVALID',
            'is-valid': group.controls[field.key].status === 'VALID'
          }"
          formControlName="{{ field.key }}"
          type="{{ field.type }}"
          name="{{ field.key }}"
          class="form-control form-control-sm"
          placeholder="{{ field.label }}"
        />
        <div class="row" style="font-size:0.6em;">
          <div *ngFor="let rule of field.rules">
            {{ rule.type + "(" + rule.value + ")  ,  " }}
          </div>
        </div>
      </div>

      <div *ngSwitchCase="'radio'" class="form-check">
        <label class="form-check-label">
          <input
            class="form-check-input"
            formControlName="{{ field.key }}"
            type="{{ field.type }}"
            name="{{ field.key }}"
            value="{{ field.value }}"
          />
          {{ field.label }}</label
        >
      </div>

      <div *ngSwitchCase="'select'">
        <label>{{ field.label }}</label>
        <select
          [ngClass]="{
            'is-invalid': group.controls[field.key].status === 'INVALID',
            'is-valid': group.controls[field.key].status === 'VALID'
          }"
          formControlName="{{ field.key }}"
          name="{{ field.key }}"
          class="form-control form-control-sm"
        >
          <option
            *ngFor="let select of field.options"
            value="{{ select.value }}"
          >
            {{ select.title }}
          </option>
        </select>
        <div class="row">
          <div *ngFor="let rule of field.rules" style="font-size:0.6em;">
            {{ rule.type + "(" + rule.value + ")  ,  " }}
          </div>
        </div>
      </div>
    </div>