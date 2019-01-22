import {Injectable} from '@angular/core';
import { LEADERS } from '../shared/leader';
@Injectable()
export class LeaderService{

    getLeader(){
        return LEADERS;
    }
}