import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  dataset: string[][];
  tableCols: any[];

  constructor() { }

  ngOnInit() {
    this.tableCols = [
      { field: 'feature_1', header: 'Feature 1' },
      { field: 'feature_2', header: 'Feature 2' },
      { field: 'feature_3', header: 'Feature 3' },
      { field: 'feature_4', header: 'Feature 4' }
    ];
  }

  // Load dataset
  parseDataset(text){
    var dataset: string[][];
    text.split('\n').forEach(item => {
      if (dataset){
        dataset.push(item.split(','));
      } else {
        dataset = [item.split(',')];
      }
    });
    return dataset;
  }

  // Reload dataset from this.dataset
  refreshTable(){
    this.tableCols.length = 0;
    if (this.dataset.length > 0){
      for (let i = 0; i < this.dataset[0].length; ++i){
        this.tableCols.push({ field: "feature_" + (i + 1), header: "Feature " + (i + 1) })
      }
    }
  }

  // Dataset Upload button
  onClickDatasetUploadButton(event){
    const reader = new FileReader();
    if (event.srcElement.files.length > 0){
      reader.readAsText(event.srcElement.files[0]);
      reader.onload = () => {
        this.dataset = this.parseDataset(reader.result);
        this.refreshTable();
      };
    }
  }

}
