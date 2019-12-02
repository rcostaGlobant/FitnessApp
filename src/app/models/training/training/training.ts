import { UserTrainingInfo } from '../user-training-info/user-training-info';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export class Training {
  trainingBeginDate: NgbDate;
  trainingEndDate: NgbDate;
  trainingUserHour: any;
  userInfo: UserTrainingInfo;
}
