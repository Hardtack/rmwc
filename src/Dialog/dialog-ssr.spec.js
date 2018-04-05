/**
 * @jest-environment node
 */
import React from 'react';
import { renderToString as mount } from 'react-dom/server';
import {
  Dialog,
  DialogSurface,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogBackdrop,
  SimpleDialog
} from './';

describe('Dialog', () => {
  it('simple Dialog renders', () => {
    mount(
      <SimpleDialog
        title="This is a simple dialog"
        body="You can pass the body prop, or anything you want as children."
        open
        onClose={evt => {}}
        onAccept={evt => alert('Accepted')}
        onCancel={evt => alert('Cancelled')}
      />
    );
  });

  it('standard Dialog renders', () => {
    mount(
      <Dialog open onClose={evt => {}}>
        <DialogSurface>
          <DialogHeader>
            <DialogHeaderTitle>Dialog Title</DialogHeaderTitle>
          </DialogHeader>
          <DialogBody scrollable>This is a custom dialog.</DialogBody>
          <DialogFooter>
            <DialogFooterButton cancel>Cancel</DialogFooterButton>
            <DialogFooterButton accept>Sweet!</DialogFooterButton>
          </DialogFooter>
        </DialogSurface>
        <DialogBackdrop />
      </Dialog>
    );
  });
});