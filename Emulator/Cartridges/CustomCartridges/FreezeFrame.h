// -----------------------------------------------------------------------------
// This file is part of VirtualC64
//
// Copyright (C) Dirk W. Hoffmann. www.dirkwhoffmann.de
// Licensed under the GNU General Public License v2
//
// See https://www.gnu.org for license information
// -----------------------------------------------------------------------------

#pragma once

#include "Cartridge.h"

class FreezeFrame : public Cartridge {
    
public:
    
    FreezeFrame(C64 &ref) : Cartridge(ref) { };
    const char *getDescription() const override { return "FreezeFrame"; }
    CartridgeType getCartridgeType() const override { return CRT_FREEZE_FRAME; }
    
private:

    void _reset() override;

    
    //
    // Accessing cartridge memory
    //
    
public:
    
    u8 peekIO1(u16 addr) override;
    u8 spypeekIO1(u16 addr) const override;
    u8 peekIO2(u16 addr) override;
    u8 spypeekIO2(u16 addr) const override;

    
    //
    // Operating buttons
    //
    
    long numButtons() const override { return 1; }
    const char *getButtonTitle(unsigned nr) const override;
    void pressButton(unsigned nr) override;
    void releaseButton(unsigned nr) override;
};