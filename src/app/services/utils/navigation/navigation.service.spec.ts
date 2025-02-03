import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { NavigationUtilityService } from './navigation.service';

describe('NavigationUtilityService', () => {
    let service: NavigationUtilityService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NavigationUtilityService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initiate with both variables as false', () => {
        expect(service.expanded()).toBeFalsy();
        expect(service.isMenuOpen()).toBeFalsy();
    });

    it('should expand the navigation for both rail and bar', () => {
        service.navigationToggle('rail');
        expect(service.isMenuOpen()).toBeFalsy();

        service.navigationToggle('bar');
        expect(service.isMenuOpen()).toBeTruthy();
    });

    it('should toggle the overflow state', fakeAsync(() => {
        tick();
        // expect(document.body.style.overflow).toBe('hidden');
        // service.setOverflow('hidden');
        tick();
        expect(document.body.style.overflow).toBe('hidden');
    }));
});
